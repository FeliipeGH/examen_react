export interface EventsAlertInterface {
    onConfirm?: () => void;
    onDenied?: () => void;
    onDismissed?: () => void;
}