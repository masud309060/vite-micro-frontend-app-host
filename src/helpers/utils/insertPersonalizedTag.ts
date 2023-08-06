import React from "react";

export const insertPersonalizedTag = (
  personalizedTag: string,
  inputRef: React.MutableRefObject<any | string>,
  onChange: (value: string) => void
) => {
  let input = inputRef.current;
  if (input.editor) {
    //Inserting to editor
    inputRef.current.editor.execCommand("mceInsertContent", false, personalizedTag);
  } else {
    //Inserting to input
    let value = input.value;
    let selectionStart = input.selectionStart;
    onChange(value.substring(0, selectionStart) + personalizedTag + value.substring(selectionStart));
    setTimeout(() => {
      input.setSelectionRange(selectionStart + personalizedTag.length, selectionStart + personalizedTag.length);
    }, 100);
  }
};
