import { useEffect, useRef } from "react"
import Typed from "typed.js";


interface Props {
    words: string[]
}

export const TypedWords = ({words}: Props) => {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: words,
      typeSpeed: 250,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );

}