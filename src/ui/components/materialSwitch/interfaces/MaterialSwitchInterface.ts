export interface MaterialSwitchInterface {
    name: string,
    label: string,
    color?: "primary" | "default" | "secondary",
    onChange: () => void,
    checked: boolean,
}