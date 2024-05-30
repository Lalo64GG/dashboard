import React, { useState, useEffect, useRef } from "react";
import Message from "../Atoms/Message";
import RoundedBtn from "../Atoms/RoundedBtn";
import { messagesData } from "../../data/whatsapp";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs1, cs2 } from "../../assets/whatsapp";
import { getTime } from "../../logic/whatsapp";

function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Functions

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleEmojiClick = () => {
    inputRef.current.value += "🔥";
    inputRef.current.focus();
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  return (
    // ChatDetail main container
    <div className="flex flex-col h-screen relative">
      {/* Contact nav */}
      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
        {/* Contact info */}
        <div className="flex items-center">
          {/* Profile picture */}
          <img
            src={cs1}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />

          {/* Info */}
          <div className="flex flex-col">
            {/* Contact */}
            <h1 className="text-white font-medium">Coding Spot</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <RoundedBtn icon={<MdSearch />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* Messages section */}
      <div
        className="flex-1 bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-cover overflow-y-auto p-4 mb-[70px]"
      >
        {messages.map((msg, index) => (
          <Message
            key={index}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center bg-[#202d33] p-3">
        {/* Emoji btn */}
        <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />

        {/* Upload btn */}
        <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImgUpload} className="mx-2" />

        {/* Input bar */}
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 px-4 py-2 placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        />

        {/* Mic/Send btn */}
        <RoundedBtn
          icon={typing ? <MdSend /> : <BsFillMicFill />}
          onClick={typing ? handleInputSubmit : null}
          className="ml-2"
        />
      </div>
    </div>
  );
}

export default ChatDetail;
