const DropDown = ({
  handleChangeCity,
  handleChangeOption,
 
}) => {
  return (
    <>
      <div className="flex justify-center gap-2">
        <div className="mb-3 w-1/4	">
          <select
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            onChange={handleChangeCity}
          >
            <option defaultValue>Select City</option>
            <option value="BANGALORE">Bangalore</option>
            <option value="MUMBAI">Mumbai</option>
            <option value="DELHI">Delhi</option>
            <option value="PUNE">Pune</option>
            <option value="PATNA">Patna</option>
          </select>
        </div>

        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            onChange={handleChangeOption}
          >
            <option defaultValue>Select Search Option</option>
            <option value="ifsc">IFSC</option>
            <option value="branch">Branch</option>
            <option value="bank_name">Bank Name</option>
            <option value="address">Address</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DropDown;
