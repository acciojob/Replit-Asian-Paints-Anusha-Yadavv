//your JS code here. If required.
 function changeColor() {
        const blockId = document.getElementById("block_id").value;
        const color = document.getElementById("colour_id").value;

        const blockElement = document.getElementById(blockId);
        if (blockElement) {
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
            blockElement.style.backgroundColor = color;
        } else {
            alert("Invalid Block ID");
        }
    }

    function resetColors() {
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }
