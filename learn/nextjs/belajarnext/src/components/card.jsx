export const ProfileCard = ({ name, gender, age }) => {
  if (gender === "female") {
    return (
      <div className="bg-rose-100 text-rose-600 border-2 border-rose-200 rounded-lg p-4 w-[300px]">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
      </div>
    );
  }
  return (
    <div className="bg-blue-100 text-blue-600 border-2 border-blue-200 rounded-lg p-4 w-[300px]">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
    </div>
  );
};
