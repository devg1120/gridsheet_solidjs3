//import { JSX, Show } from 'solid-js';
import { Show } from 'solid-js';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export function Modal(props: ModalProps) {
  return (
    <Show when={props.isOpen}>
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={props.onClose}
      >
        <div 
          class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            class="float-right text-gray-500 hover:text-black font-bold"
            onClick={props.onClose}
          >
            ✕
          </button>
          {props.children}
        </div>
      </div>
    </Show>
  );
}

