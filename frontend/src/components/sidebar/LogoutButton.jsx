import { RiLogoutCircleLine } from 'react-icons/ri';

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <button>
        <RiLogoutCircleLine className='w-6 h-6 text-white cursor-pointer'/>
      </button>
    </div>
  );
};

export default LogoutButton;
