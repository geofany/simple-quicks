interface InboxProps {
  inbox: Array<Inbox>;
}

export const useInboxStore = defineStore("inbox", {
  state(): InboxProps {
    return {
      inbox: [
        {
          name: "109220-Naturalization",
          isGroup: true,
          isNewMessage: true,
          chatGroup: [
            {
              date: "09-06-2024",
              chats: [
                {
                  date: "09-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Just Fill me in for his updates yea?",
                },
                {
                  date: "09-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "No worries. It will be completed ASAP. I've asked him yesterday.",
                },
              ],
            },
            {
              date: "10-06-2024",
              chats: [
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Sure thing, Claren",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: false,
                  name: "Obaidullah Amarkhil",
                  chat: "Morning. I'll try to do them. Thanks",
                },
              ],
            },
          ],
        },
        {
          name: "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
          isGroup: true,
          isNewMessage: false,
          chatGroup: [
            {
              date: "09-06-2024",
              chats: [
                {
                  date: "09-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Just Fill me in for his updates yea?",
                },
                {
                  date: "09-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "No worries. It will be completed ASAP. I've asked him yesterday.",
                },
              ],
            },
            {
              date: "10-06-2024",
              chats: [
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Sure thing, Claren",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Ellen",
                  chat: "Hey, please read.",
                },
              ],
            },
          ],
        },
        {
          name: "8405-Diana SALAZAR MUNGUIA",
          isGroup: true,
          isNewMessage: false,
          chatGroup: [
            {
              date: "09-06-2024",
              chats: [
                {
                  date: "09-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Just Fill me in for his updates yea?",
                },
                {
                  date: "09-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "No worries. It will be completed ASAP. I've asked him yesterday.",
                },
              ],
            },
            {
              date: "10-06-2024",
              chats: [
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Mary Hilda",
                  chat: "Sure thing, Claren",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "Cameron Phillips",
                  chat: "I understand your initial concerns and thats very valid, Elizabeth. But you",
                },
              ],
            },
          ],
        },
        {
          name: "FastVisa Support",
          isGroup: false,
          isNewMessage: false,
          chatGroup: [
            {
              date: "10-06-2024",
              chats: [
                {
                  date: "10-06-2024 19:32",
                  isMe: false,
                  isRead: true,
                  name: "FastVisa Support",
                  chat: "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
                },
                {
                  date: "10-06-2024 19:32",
                  isMe: true,
                  isRead: true,
                  name: "You",
                  chat: "Hi, I need help with something can you help me ?",
                },
              ],
            },
          ],
        },
      ],
    };
  },
});
