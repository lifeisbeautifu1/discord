import { FaDiscord } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";

type Props = {
  offline?: boolean;
  online?: boolean;
  bgColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;
  image?: string;
};

const Avatar: React.FC<Props> = ({
  offline,
  online,
  bgColor = "bg-dark",
  borderColor = "border-dark",
  hoverBgColor = "group-hover:bg-dark",
  hoverBorderColor = "group-hover:border-dark",
  image = "https://cdn.discordapp.com/embed/avatars/0.png",
}) => {
  return (
    <div className="relative flex h-8 w-8">
      <img
        src={image}
        className="h-full w-full rounded-full object-cover"
        alt="avatar"
      />

      {(online || offline) && (
        <span
          className={`absolute -bottom-1 -right-1 box-content flex h-2.5 w-2.5 items-center justify-center rounded-full border-[3px] ${hoverBorderColor} ${borderColor}`}
        >
          {online ? (
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 hover:bg-green-500" />
          ) : (
            offline && (
              <span
                className={`absolute bottom-0 right-0 box-content h-1.5 w-1.5 rounded-full border-2 border-gray-400 ${hoverBgColor} ${bgColor}`}
              />
            )
          )}
        </span>
      )}
    </div>
    // <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
    //   <FaDiscord className="text-[22px]" />

    //   {(online || offline) && (
    //     <span
    //       className={`absolute -bottom-1 -right-1 box-content flex h-2.5 w-2.5 items-center justify-center rounded-full border-[3px] ${hoverBorderColor} ${borderColor}`}
    //     >
    //       {online ? (
    //         <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 hover:bg-green-500" />
    //       ) : (
    //         offline && (
    //           <span
    //             className={`absolute bottom-0 right-0 box-content h-1.5 w-1.5 rounded-full border-2 border-gray-400 ${hoverBgColor} ${bgColor}`}
    //           />
    //         )
    //       )}
    //     </span>
    //   )}
    // </div>
  );
};

export default Avatar;
