import ChildComponent from "./ChildComponent";
const Assignment = () => {
  return (
    <div className="w-[578px] h-[794px] bg-white">
      {/* This is the parent component that houses the ChildComponent which contains the text,checkboxes and the button */}
      <ChildComponent />
    </div>
  );
};

export default Assignment;
