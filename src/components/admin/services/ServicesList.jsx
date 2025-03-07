  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { fetchServices, deleteService } from "../redux/actions/servicesActions";
  import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
  import { toast } from "react-toastify";
  import Swal from "sweetalert2";
  import * as XLSX from "xlsx";
  const ServicesList = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const { services = [],  loading, error, } = useSelector((state) => state.services);

    useEffect(() => {
      dispatch(fetchServices());
    }, [dispatch]);

    // Filter services based on the search query
    const filteredServices = services.filter((service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search input change
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    // handle delete function
    // handle delete function
    const handleDelete = async (serviceId) => {
      // Show confirmation modal
      Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this service? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        width: "350px", // Adjust width
        didOpen: () => {
          // Set font size for title, text, and icon
          Swal.getTitle().style.fontSize = "15px"; // Title font size
          Swal.getText().style.fontSize = "12px"; // Text font size
          Swal.getPopup().querySelector(".swal2-icon").style.fontSize = "12px"; // Icon font size
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await dispatch(deleteService(serviceId)); // Dispatch the action
            toast.success("Service deleted successfully!");
          } catch (error) {
            const errorMessage =
              error.response?.data?.message ||
              "Failed to delete service. Please try again.";
            toast.error(errorMessage);
          }
        }
      });

      // Adjust button styles to make them smaller after modal opens
      Swal.getPopup()
        .querySelectorAll(".swal2-confirm, .swal2-cancel")
        .forEach((button) => {
          button.style.fontSize = "15px"; // Smaller font size for buttons
          button.style.padding = "5px 10px"; // Smaller padding
          button.style.height = "auto"; // Auto height to adjust with smaller padding
        });
    };

    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(services);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Services");

      // Export Excel file
      XLSX.writeFile(wb, "services.xlsx");
    };

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <>
        <Breadcrumb pageName="Services" />
        <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap p-2 rounded-sm border border-stroke bg-white px-5  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5"><input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 w-full bg-transparent  text-black focus:outline-none dark:text-white xl:w-125"
          /></div>

          {/* Export to Excel Button */}
          <button
            onClick={exportToExcel}
            className="inline-flex items-center justify-center gap-2.5 bg-green-600 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path d="M 15.875 4 L 15.78125 4.03125 L 4.78125 6.46875 L 4 6.65625 L 4 25.34375 L 4.78125 25.53125 L 15.78125 27.96875 L 15.875 28 L 18 28 L 18 25 L 28 25 L 28 7 L 18 7 L 18 4 Z M 16 6.03125 L 16 25.96875 L 6 23.78125 L 6 8.21875 Z M 18 9 L 26 9 L 26 23 L 18 23 L 18 21 L 20 21 L 20 19 L 18 19 L 18 18 L 20 18 L 20 16 L 18 16 L 18 15 L 20 15 L 20 13 L 18 13 L 18 12 L 20 12 L 20 10 L 18 10 Z M 21 10 L 21 12 L 25 12 L 25 10 Z M 14.15625 11 L 11.875 11.28125 L 10.625 13.96875 C 10.492188 14.355469 10.394531 14.648438 10.34375 14.84375 L 10.3125 14.84375 C 10.234375 14.519531 10.160156 14.238281 10.0625 14 L 9.4375 11.6875 L 7.3125 11.9375 L 7.21875 12 L 9 16 L 7 20 L 9.15625 20.25 L 10.03125 17.78125 C 10.136719 17.46875 10.222656 17.214844 10.25 17.0625 L 10.28125 17.0625 C 10.339844 17.386719 10.378906 17.628906 10.4375 17.75 L 11.78125 20.6875 L 14.21875 21 L 11.5625 15.96875 Z M 21 13 L 21 15 L 25 15 L 25 13 Z M 21 16 L 21 18 L 25 18 L 25 16 Z M 21 19 L 21 21 L 25 21 L 25 19 Z"></path>
            </svg>
          </button>
          <Link
            to={"/dashboard/services/create"}
            className="inline-flex items-center justify-center gap-2.5 bg-blue-900 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path>
              </svg>
            </span>
            Add
          </Link>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    ID
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                    Title
                  </th>
                  <th className="min-w-[300px] py-4 px-4 font-medium text-black dark:text-white">
                    Description
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Image
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Status
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {service.id}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {service.title}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {service.description}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <img
                        src={`http://127.0.0.1:8000${service.image}`}
                        alt={service.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          service.is_active === 1
                            ? "bg-success text-success"
                            : service.is_active === 0
                            ? "bg-danger text-danger"
                            : "bg-warning text-warning"
                        }`}
                      >
                        {service.is_active == 1
                          ? "active"
                          : service.is_active == 0
                          ? "inactive"
                          : "inactive"}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button
                          className="hover:text-primary"
                          onClick={() => handleDelete(service.id)}
                        >
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8569 5.36602 15.3837L4.88789 6.0094H13.111C13.0879 6.52289 12.7159 6.98627 12.2023 7.05352L11.7285 16.2563Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <Link
                          to={`/dashboard/services/${service.id}/edit`}
                          className="hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="18"
                            height="18"
                            viewBox="0 0 32 32"
                            className="fill-current"
                          >
                            <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  export default ServicesList;
