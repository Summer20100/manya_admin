import { FC, useEffect, useRef } from "react";
import { usePopup } from "../../../store/popup";
import PopupAddCategory from "./PopupAddCategory";
import PopupDeleteCategory from "./PopupDeleteCategory";
import PopupUpdateCategory from "./PopupUpdateCategory";



const Popup: FC = () => {
    const popupRef = useRef<HTMLDivElement | null>(null); 
    const { isOpen, namePopup, isOpenHandler, addNamePopup } = usePopup();
    const popupAddCategories = isOpen && namePopup === "Categories";
    const popupDeleteCategories = isOpen && namePopup === "RemoveCategory";
    const popupUpdateCategory = isOpen && namePopup === "UpdateCategory";


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                isOpenHandler(false);
            }
        };
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        };
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenHandler, isOpen]);

    return (
        <div className='popup'>
             <div className="popup__content" ref={popupRef}>
                <div className="popup__header">
                    <span className="popup__title">{ namePopup }</span>
                    <button 
                        className="popup__delete-button"
                        onClick={() => {
                            isOpenHandler(false); 
                            addNamePopup('')
                        }}>
                        ✕
                    </button>
                </div>
                <div className="popup__wrapper">
                    <div className="popup__container">
                        { popupAddCategories && <PopupAddCategory /> }
                        { popupDeleteCategories && <PopupDeleteCategory /> }
                        { popupUpdateCategory && <PopupUpdateCategory /> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
