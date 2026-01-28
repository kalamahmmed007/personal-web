// src/pages/messages/Messages.jsx
import React, { useEffect, useState } from "react"
import SectionTitle from "../../components/ui/SectionTitle"
import Table from "../../components/ui/Table"
import { getMessages } from "../../services/messageService"

const Messages = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages()
        setMessages(data)
      } catch (err) {
        console.error("Error fetching messages:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  return (
    <div className="rounded-xl bg-dark-200 p-6">
      <SectionTitle title="Messages" subtitle="All user messages" />

      {loading ? (
        <p className="text-gray-400">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-gray-400">No messages yet.</p>
      ) : (
        <Table
          columns={["Name", "Email", "Message", "Date"]}
          data={messages.map((msg) => [
            msg.name,
            msg.email,
            msg.message,
            new Date(msg.createdAt).toLocaleString()
          ])}
        />
      )}
    </div>
  )
}

export default Messages
