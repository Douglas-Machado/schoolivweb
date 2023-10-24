import { BiEdit, BiLogOut, BiSolidBookBookmark, BiSolidUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5"
import { RiFileListFill } from "react-icons/ri"
import { TbUserCircle } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="px-2 bg-light flex justify-between flex-col bg-zinc-500 text-white">
      <nav className="pt-8 flex-1">
        <div className="flex flex-col items-center px-14">
          <TbUserCircle size={50} color="#4266f5"/>
          <p>user name</p>
          <div className="flex items-center">
            <span className="pr-2">name</span>
            <div className="pt-0.5">
              <BiEdit size={16} color="#4266f5"/>
            </div>
          </div>
        </div>
        <nav className="pt-12 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <BiSolidBookBookmark size={24}/>
            <p>DIARIO</p>
          </div>
          <div className="flex items-center gap-4">
            <RiFileListFill size={24}/>
            <p>TURMAS</p>
          </div>
          <div className="flex items-center gap-4">
            <BiSolidUser size={24}/>
            <p>ALUNOS</p>
          </div>
          <div className="flex items-center gap-4">
            <IoSettingsOutline size={24}/>
            <p>CONFIGURAÇÕES</p>
          </div>
        </nav>
        <div className="flex items-center gap-4 flex-1">
          <BiLogOut size={30}/>
          <p>SAIR</p>
        </div>
      </nav>
    </div>
  );
}
