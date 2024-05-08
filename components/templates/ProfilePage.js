import { useEffect, useState } from "react";
import ProfileForm from "../modules/ProfileForm";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();

    if (data.status === "success") setProfile(data.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") await fetchProfile();
  };

  return (
    <div className="p-3">
      <h3 className="pb-5">Profile</h3>
      <h4>Your Email: {profile?.email}</h4>
      {profile?.name && <h4>Your Name: {profile?.name}</h4>}

      {!profile?.name && (
        <ProfileForm
          name={name}
          setName={setName}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default ProfilePage;
