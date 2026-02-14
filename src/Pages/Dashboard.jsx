const Dashborad = () => {
  const data = localStorage.getItem("userdata");
  const user = JSON.parse(data);
  console.log(user);

  return (
    <div className="flex flex-col w-full min-h-screen sm:min-h-[60vh] sm:max-w-[60%] mx-auto text-center p-5 items-center justify-center bg-blue-200 shrink-0 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mt-4 mb-4">Hello ! User</h1>
      <h2 className="text-2xl font-bold mt-4 mb-4">
        This is your userID: {user.UserID}
      </h2>
      <h2 className="text-2xl font-bold mt-4 mb-4">This is the Home page</h2>
    </div>
  );
};

export default Dashborad;
