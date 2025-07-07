// In your page or parent component file
import DrawingCursorEffect from "@/components/nurui/cursor-draw";

export function CursorDrawDemo() {
  return (
    <DrawingCursorEffect
      type="drawAlways"
      strokeColor="#80eeb4"
      strokeWidth={10}
      followEffect={true}
    >
      <p className="text-3xl text-center pt-12 text-[#80eeb4] font-bold">
        Move cursor to see the effect.
      </p>
    </DrawingCursorEffect>
  );
}
