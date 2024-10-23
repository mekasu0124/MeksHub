import { Link } from 'react-router-dom';


export default function dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0 bg-bg2 rounded border-b-2 border-b-fg p-2">
        <div className="flex flex-row items-center justify-start w-[50%]">
          <Link 
            to="/hub/admin/modify-apps"
            className="font-inkfree text-fg text-2xl italic hover:underline ml-2 mr-2">
            Modify Apps
          </Link>
          
          <Link 
            to="/hub/admin/modify-members"
            className="font-inkfree text-fg text-2xl italic hover:underline ml-2 mr-2">
            Modify Members
          </Link>
        </div>

        <div className="flex flex-row items-center justify-end w-[50%]">
          <img src="/images/app-icon.jpg" alt="Mek's Hub Icon" className="w-[150px] h-[80px] rounded-lg mr-5" />
        </div>
      </div>
    </div>
  );
};
