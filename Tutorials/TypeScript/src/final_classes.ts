class MessageQueue{
    private constructor(private messages: string[]){}

    static create(messages: string[]){
        return new MessageQueue(messages)
    }
}

class BadQueue extends MessageQueue {} // final classes can't be extended

// new MessageQueue([]) won't work

MessageQueue.create([]) // works for the above