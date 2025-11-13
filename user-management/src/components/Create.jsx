import React, { useEffect, useState } from "react";
import { getContext } from "../store/Provider";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { state } = getContext();
  const navigate = useNavigate();

  //User form state
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  //Error message state
  const [errorMessage, setErrorMessage] = useState("");

  //Handle error message timeout
  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [errorMessage]);

  //handling loading state
  const [loading, setLoading] = useState(false);

  //Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await state.createNewUser(formData);
      setFormData({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: { lat: "", lng: "" },
        },
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });
      navigate("/");
    } catch (error) {
      setErrorMessage("Failed to create user. Please try again.");
      console.error("Error in creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="bg-slate-950 min-h-screen flex items-center justify-center  flex-col ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Create New User</h2>
          <p className="text-center">{errorMessage}</p>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input"
            />
            <input
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="input"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="input"
            />
            <input
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              className="input"
            />
          </div>

          {/* Address */}
          <fieldset className="border-t border-gray-600 pt-4">
            <legend className="text-lg font-semibold">Address</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input
                placeholder="Street"
                value={formData.address.street}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, street: e.target.value },
                  })
                }
                className="input"
              />
              <input
                placeholder="Suite"
                value={formData.address.suite}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, suite: e.target.value },
                  })
                }
                className="input"
              />
              <input
                placeholder="City"
                value={formData.address.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, city: e.target.value },
                  })
                }
                className="input"
              />
              <input
                placeholder="Zipcode"
                value={formData.address.zipcode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, zipcode: e.target.value },
                  })
                }
                className="input"
              />
              <input
                placeholder="Latitude"
                value={formData.address.geo.lat}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      geo: { ...formData.address.geo, lat: e.target.value },
                    },
                  })
                }
                className="input"
              />
              <input
                placeholder="Longitude"
                value={formData.address.geo.lng}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      geo: { ...formData.address.geo, lng: e.target.value },
                    },
                  })
                }
                className="input"
              />
            </div>
          </fieldset>

          {/* Company */}
          <fieldset className="border-t border-gray-600 pt-4">
            <legend className="text-lg font-semibold">Company</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input
                placeholder="Company Name"
                value={formData.company.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: { ...formData.company, name: e.target.value },
                  })
                }
                className="input"
              />
              <input
                placeholder="Catch Phrase"
                value={formData.company.catchPhrase}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: {
                      ...formData.company,
                      catchPhrase: e.target.value,
                    },
                  })
                }
                className="input"
              />
              <input
                placeholder="Business Strategy"
                value={formData.company.bs}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: { ...formData.company, bs: e.target.value },
                  })
                }
                className="input"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Create;
