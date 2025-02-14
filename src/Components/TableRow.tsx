import img from '../assets/img.svg';

type TableRowProps = {
  email: string;
  name: string;
  index: number;
  todos: number;
};

export const TableRow: React.FC<TableRowProps> = ({ email, name, todos, index }) => {
  return (
    <tr className="border-b border-gray-600">
      <td className="py-1 px-2 sm:px-4 w-1/12">{index + 1}</td>
      <td className="py-1 px-2 sm:px-4 w-9/12 flex items-center">
        <img
          src={img}
          alt="user-photo"
          className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full mr-2"></img>
        <div>
          <span className="font-inter font-medium text-white text-[12px] sm:text-[16px] leading-[12px] sm:leading-[19.36px]">
            {name}
          </span>
          <br />
          <span className="font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[14.52px] text-white opacity-40">
            {email}
          </span>
        </div>
      </td>
      <td className="py-2 px-2 sm:px-4 w-2/12">{todos}</td>
    </tr>
  );
};
