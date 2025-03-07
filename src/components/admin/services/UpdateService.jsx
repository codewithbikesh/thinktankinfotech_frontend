import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "../components/Checkboxes/CheckboxTwo";
import { editService, updateService } from "../redux/actions/servicesActions";
import { toast } from "react-toastify";

function UpdateService() {
  const { id } = useParams(); // Get service ID from the route
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isActive, setIsActive] = useState(true); // default to false
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select data from the Redux state
  const { services, loading, error } = useSelector((state) => state.services);
  const serviceDetails = services.find((service) => service.id === Number(id));

  // Fetch services when the component mounts
  useEffect(() => {
    if (!services.length) {
      dispatch(editService()); // Fetch services when not available
    }
  }, [dispatch, services]);

  // Load service details into the form if available
  useEffect(() => {
    if (serviceDetails) {
      setTitle(serviceDetails.title || "");
      setDescription(serviceDetails.description || "");
      setIsActive(serviceDetails.is_active == "1");
      setImagePreview(serviceDetails.image || null);
    }
  }, [serviceDetails]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (imagePreview && image instanceof File) {
        URL.revokeObjectURL(imagePreview); // Clean up previous image URL to avoid memory leaks
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Client-side validation
    if (!title.trim()) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
      return;
    }
    if (!description.trim()) {
      setErrors((prev) => ({ ...prev, description: "Description is required" }));
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image); // Only include image if changed
    formData.append("is_active", isActive ? 1 : 0);

    try {
      // Dispatch the updateService action with the FormData
      await dispatch(updateService({ serviceId: id, updatedData: formData }));
      toast.success("Service updated successfully!");
      navigate("/dashboard/services");
    } catch (err) {
      console.error("Error updating service:", err);
      if (err.response && err.response.status === 500) {
        setErrors(err.response.data.errors); // Handle backend validation errors
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  // Loading state handling
  if (loading || !serviceDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading service details...</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName="Update Service" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full"
        >
          <div className="flex justify-end border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link
              to="/dashboard/services"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-900 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
            >
              Back
            </Link>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="w-full">
              <label className="mb-3 block text-black dark:text-white">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                className={`w-full rounded-lg border-[1.5px] ${errors.title ? "border-red-500" : "border-stroke focus:border-primary"} bg-transparent py-3 px-5 text-black outline-none transition dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">Description</label>
              <textarea
                rows={6}
                placeholder="Enter Description"
                className={`w-full rounded-lg border-[1.5px] ${errors.description ? "border-red-500" : "border-stroke focus:border-primary"} bg-transparent py-3 px-5 text-black outline-none transition dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className={`w-full rounded-md border ${errors.image ? "border-red-500" : "border-stroke focus:border-primary"} p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white`}
                onChange={handleImageChange}
              />
              {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}

              {imagePreview && (
                <img
                  src={image instanceof File ? URL.createObjectURL(image) : `http://127.0.0.1:8000${imagePreview}`}
                  alt="Selected preview"
                  className="mt-4 h-40 w-40 object-cover rounded-md border"
                />
              )}
            </div>

            <div>
            <CheckboxTwo isChecked={isActive} onChange={() => setIsActive(!isActive)} />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-900 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>

            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateService;
