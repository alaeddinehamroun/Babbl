export interface ChatMessage {
    $key?: string;
    email: string | null;
    fromto: string;
    message: string;
    timeSent: string;
}
