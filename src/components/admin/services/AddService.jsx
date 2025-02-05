import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "../components/Checkboxes/CheckboxTwo";
import { createStoreService } from "../redux/actions/servicesActions";
import { toast } from "react-toastify";

function AddService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.services);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      setImage(file); // Set the image file
      setImagePreview(URL.createObjectURL(file)); // Set image preview
  
      // Clear the image error when a file is selected
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({});

    // Basic validation for empty fields before submitting
    if (!title.trim()) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
      return;
    }

    if (!description.trim()) {
      setErrors((prev) => ({ ...prev, description: "Description is required" }));
      return;
    }

    if (!image) {
      setErrors((prev) => ({ ...prev, image: "Please select an image" }));
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("is_active", isActive ? "1" : "0");

    try {
      // Dispatch the action to create the service and wait for the response
      await dispatch(createStoreService(formData));

      // If backend validation passes, navigate and show success message
      toast.success("Service created successfully!");
      navigate("/dashboard/services");

      // Reset the form fields after successful submission
      setTitle("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
      setIsActive(false);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        // Set input-specific errors from the backend
        setErrors(err.response.data.errors);
      } else {
        // Fallback error if something goes wrong during submission
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Service" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full"
          >
            <div className="flex justify-end border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <Link
                to={"/dashboard/services"}
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
                  className={`w-full rounded-lg border-[1.5px] ${
                    errors.title ? "border-red-500" : "border-stroke focus:border-primary"
                  } bg-transparent py-3 px-5 text-black outline-none transition dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
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
                  className={`w-full rounded-lg border-[1.5px] ${
                    errors.description ? "border-red-500" : "border-stroke focus:border-primary"
                  } bg-transparent py-3 px-5 text-black outline-none transition dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className={`w-full rounded-md border ${
                    errors.image ? "border-red-500" : "border-stroke focus:border-primary"
                  } p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white`}
                  onChange={handleImageChange}
                />
                {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Selected preview"
                    className="mt-4 h-40 w-40 object-cover rounded-md border"
                  />
                )}
              </div>
              <div>
                <CheckboxTwo
                  isChecked={isActive}
                  onChange={() => setIsActive(!isActive)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-900 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              {success && (
                <p className="mt-2 text-sm text-green-500">Service created successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddService;
