import React,{memo} from "react";

function MemoComp ({name,age}) {

}
// props의 변경이 있을때만 랜더링된다.
export default memo(MemoComp)