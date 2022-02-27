export interface User {
    username: string
    color?: string
}

export interface Room {
    id?: string
    title: string
    createdAt: Date
    createdBy: string
    messages: Array<Message>
}

export interface Message {
    id?: string
    sendedBy: string
    message: string
    datetime: Date
    state: string
    responseTo?: Message
}