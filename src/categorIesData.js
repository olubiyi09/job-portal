
import { IoIosLaptop } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { TfiHelp } from "react-icons/tfi";
import { CiBank, CiDatabase } from "react-icons/ci";
import { PiBowlFoodLight, PiPersonSimpleBikeLight } from "react-icons/pi";
import { PiBriefcaseThin } from "react-icons/pi";

const jobCategories = [
    {
        title: 'Software Development',
        icon: <IoIosLaptop size={34} />,
    },
    {
        title: 'Web Development',
        icon: < BsCodeSlash size={30} />,
    },
    {
        title: 'Technical Support',
        icon: <TfiHelp size={30} />,
    },
    {
        title: 'Finance & Banking Service',
        icon: <CiBank size={30} />,
    },
    {
        title: 'Machine Learning',
        icon: <CiDatabase size={30} />,
    },
    {
        title: 'Restaurant Services',
        icon: <PiBowlFoodLight size={28} />,
    },
    {
        title: 'Home Delivery Services',
        icon: <PiPersonSimpleBikeLight size={30} />,
    },
    {
        title: 'Business Development',
        icon: <PiBriefcaseThin size={30} />,
    },

];

export default jobCategories;
