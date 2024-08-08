const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="" />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-violet-500'}>
        Hi! What&apos;s Up?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        20:20
      </div>
    </div>
  );
};

export default Message;
