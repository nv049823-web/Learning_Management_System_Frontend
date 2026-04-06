import React, { useState, } from 'react';

// // Entity ke base par Interface define ki hai
// interface UserProfile {
//   name: string;
//   email: string;
//   mobile: string;
//   profile: string; // Profile image URL
//   adress: string;
// }

const UserUpdateProfile: React.FC = () => {
//   // Initial state (Real app mein ye data API se aayega)
//   const [formData, setFormData] = useState<UserProfile>({
//     name: '',
//     email: '',
//     mobile: '',
//     profile: '',
//     adress: ''
//   });

//   // Input change handler
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Form submit handler
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log("Updated Data:", formData);
//     // Yahan aap apni axios ya fetch API call kar sakte hain
//     alert("Profile Update Request Sent!");
//   };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-dark text-white border-0 shadow-lg rounded-4">
            <div className="card-header border-secondary bg-transparent p-4">
              <h4 className="mb-0 fw-bold">Update Profile</h4>
              <small className="text-secondary">Apni details yahan se manage karein</small>
            </div>
            
            <div className="card-body p-4">
              <form >
                <div className="row g-3">
                  
                  {/* Name Field */}
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Full Name</label>
                    <input
                      type="text"
                      className="form-control bg-secondary bg-opacity-10 border-secondary text-white"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Field (Unique) */}
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Email Address</label>
                    <input
                      type="email"
                      className="form-control bg-secondary bg-opacity-10 border-secondary text-white"
                      name="email"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control bg-secondary bg-opacity-10 border-secondary text-white"
                      name="mobile"
                      placeholder="+91 0000000000"
                    />
                  </div>

                  {/* Profile Image Link */}
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Profile Image URL</label>
                    <input
                      type="text"
                      className="form-control bg-secondary bg-opacity-10 border-secondary text-white"
                      name="profile"
                      placeholder="https://image-link.com"
                    />
                  </div>

                  {/* Address Field */}
                  <div className="col-12">
                    <label className="form-label text-secondary small">Address</label>
                    <textarea
                      className="form-control bg-secondary bg-opacity-10 border-secondary text-white"
                      name="adress"
                      rows={3}
                      placeholder="Your full address here..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary px-5 rounded-pill fw-bold py-2 shadow-sm">
                      Save Changes
                    </button>
                    <button type="button" className="btn btn-link text-secondary text-decoration-none ms-3">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdateProfile;