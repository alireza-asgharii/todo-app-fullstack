import { useEffect, useState } from "react";
import ProfileForm from "../modules/ProfileForm";
import { useProfile, useUpdateProfile } from "@/hooks/useProfile";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({});
  const { data, isLoading, error, refetch } = useProfile();
  const { mutate } = useUpdateProfile();

  const fullName = data?.data.data.name;
  const email = data?.data.data.email;

  const submitHandler = async () => {
    mutate(
      { name },
      {
        onSuccess: () => refetch(),
      }
    );
  };

  return (
    <div className="p-3">
      <h3 className="pb-5">Profile</h3>
      <h4>Your Email: {email}</h4>
      {fullName && <h4>Your Name: {fullName}</h4>}

      {!fullName && !isLoading && (
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
