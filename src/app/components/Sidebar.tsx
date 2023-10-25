import {
  BiEdit,
  BiLogOut,
  BiSolidBookBookmark,
  BiSolidUser,
} from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFileListFill } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="py-4 px-1.5 bg-light bg-zinc-500 text-white">
      <div className="pt-8 flex flex-col h-full justify-between">
        <div className="flex flex-col items-center justify-center px-14 text-center">
          <TbUserCircle size={50} color="#4266f5" />
          <p className="text-xl">user name</p>
          <div className="flex items-center justify-center">
            <span className="pr-2 text-sm font-medium">name</span>
            <div className="pt-0.5">
              <BiEdit size={16} color="#4266f5" />
            </div>
          </div>
        </div>
        <nav className="pt-12 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <BiSolidBookBookmark size={24} />
            <p>DIARIO</p>
          </div>
          <div className="flex items-center gap-4">
            <RiFileListFill size={24} />
            <p>TURMAS</p>
          </div>
          <div className="flex items-center gap-4">
            <BiSolidUser size={24} />
            <p>ALUNOS</p>
          </div>
          <div className="flex items-center gap-4">
            <IoSettingsOutline size={24} />
            <p>CONFIGURAÇÕES</p>
          </div>
        </nav>
        <div className="flex flex-1 items-end pl-6 gap-4">
          <BiLogOut size={30} />
          <p>SAIR</p>
        </div>
      </div>
    </div>
  );
}
