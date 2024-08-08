import MessageInput from './MessageInput';
import Messages from './Messages';
import { LuMessagesSquare } from 'react-icons/lu';

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-green-500 px-4 py-2 mb-2">
            <span className="text-gray-800 font-bold">John Doe</span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🙌 John Doe!</p>
        <p>Select a Conversation to start messaging</p>{' '}
        <LuMessagesSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
