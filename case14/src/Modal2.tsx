//import { JSX, Show } from 'solid-js';
import { Show } from 'solid-js';
import { DragAndResize, defaultState } from "./resize";
import type { Position, State  } from "./resize";
import styles from "./App.module.css";

//Gimport { TbBrandSolidjs } from "solid-icons/tb";
//import { CustomIcon } from "solid-icons";
import { CustomIcon } from "./custom-icons.tsx";

const iconContent = {
  a: { fill: "currentColor", viewBox: "0 0 384 512" },
  c: '<path d="M384 319.1C384 425.9 297.9 512 192 512S0 425.87 0 320c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5V287c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2C185.35-8.92 216 .03 216 23.83 215.1 127 384 149.7 384 319.1z"/>',
}


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export function Modal2(props: ModalProps) {
  return (
    <Show when={props.isOpen}>
            <DragAndResize
                //class={styles.DragAndResize + " " + className()}
                //class={ className()}
		//class="draggable"
                style={{
                    //"border-radius": "0.5rem",
                    //"background-color": "lightgray",
                    "background-color": "#e0e0e0",
		    "border": "solid 1px gray",
                }}
                //ref={reference}
		/*
                enabled={
                    separateEnabling()
                        ? {
                            drag: dragEnabled(),
                            resize: resizeEnabled(),
                        }
                        : enabled()
                }
		*/
                enabled={
                         {
                            drag: true,
                            resize: true,
                        }
		}
                //disableUserSelect={!userSelect()}
                initialState={{ x: 10, y: 10, width: 1200, height: 600 }}
                minSize={{ width: 80, height: 80 }}
                //maxSize={{ width: 500, height: 500 }}
                //position={position()}
                //state={state()}
	/*	
                boundary={
                    boundaries()
                        ? "window"
                        : "parent" 
                }
		*/
                boundary="window"
                //boundary="parent"
                //dragHandle={handleEnabled() ? ".handle" : undefined}
                dragHandle=".handle"
                classWhileDragging="currentlyDragging"
                classWhileResizing="currentlyResizing"
                dragStart={(e) => {
                    console.log("Drag started parameters:");
                    console.log({ event: e });
                }}
                drag={(e, offset, state) => {
                    console.log("Drag parameters:");
                    //console.log({ event: e, offset: offset, state: state });
                }}
                dragEnd={(e, offset, state) => {
                    console.log("Drag ended parameters");
                    //console.log({ event: e, offset: offset, state: state });
                }}
                resizeStart={(e) => {
                    console.log("Resize started parameters:");
                    //console.log({ event: e });
                }}
                resize={(e, dir, action) => {
                    console.log("Resize parameters:");
                    //console.log({ event: e, direction: dir, action: action });
                }}
                resizeEnd={(e, dir, action) => {
                    console.log("Resize ended parameters:");
                    //console.log({ event: e, direction: dir, action: action });
                }}
                id="DragAndResize"
		/*
                resizeAxes={
                    !rightHandlesOnly()
                        ? undefined
                        : {
                              topRight: true,
                              right: true,
                              bottomRight: true,
                          }
                }
		*/
                resizeAxes={
                         {
                              topRight: true,
                              right: true,
                              bottomRight: true,
                          }
                }
                resizeHandleProps={{
                    all: {
                        className: "thing",
                    },
                }}
                customResizeHandles={[
                    {
                        direction: "right",
                        element: document.getElementById("custom-handle-right")!,
                    },
                ]}
            >

                <div class={styles.DragHandle} classList={{ handle: true }} >
  		   <CustomIcon class={styles.ToolbarItem} src={iconContent} style={{ float: "left", "margin-top": "3"}} size={12} color="red" />
  		   <CustomIcon class={styles.ToolbarItem} src={iconContent} style={{ float: "left", "margin-top": "3"}} size={12} color="red" />
  		   <CustomIcon class={styles.ToolbarItem} src={iconContent} style={{ float: "left", "margin-top": "3", "margin-left":"10"}} size={12} color="green" />
  		   <CustomIcon class={styles.ToolbarItem} src={iconContent} style={{ float: "right","margin-top": "3"}} size={12} color="blue" />
		</div>
		
                <div id="custom-handle-right" />
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
     </DragAndResize>
    </Show>
  );
}

