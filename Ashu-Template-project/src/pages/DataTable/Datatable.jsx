import { tenkRows } from "./DataTable.utils";

const Datatable = (props) => {
  const rows = tenkRows();

  const handleRowClick = (e, rowNo) => {
    if (rowNo === 1) {
      const project = document.getElementById("1000");
      project.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <div className={`overflow-x-auto h-[calc(100vh-150px)]`}>
      <table className="table table-pin-cols table-pin-rows cursor-pointer">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({
              id,
              rowNo,
              name,
              job,
              company,
              location,
              lastLogin,
              favColor,
            }) => {
              return (
                <tr key={id} id={id} onClick={(e) => handleRowClick(e, rowNo)}>
                  <th>{rowNo}</th>
                  <td>{name}</td>
                  <td>{job}</td>
                  <td>{company}</td>
                  <td>{location}</td>
                  <td>{lastLogin}</td>
                  <td>{favColor}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
