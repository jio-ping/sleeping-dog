import { Input, ModeButton, StateButton } from "@/components/Atom/index";
export default function Header() {
  return (
    <div className="flex w-full justify-between">
      <Input />
      <div className="flex gap-2">
        <StateButton />
        <ModeButton />
      </div>
    </div>
  );
}
