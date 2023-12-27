//your JS code here. If required.

 function changeColor(id) {
        const blockId = document.getElementById("block_id").value;
        const color = document.getElementById("colour_id").value;

        if (blockId) {
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });

            const blockElement = document.getElementById(id);
            if (blockElement) {
                blockElement.style.backgroundColor = color;
            } else {
                alert("Invalid Block ID");
            }
        } else {
            alert("Please enter Block ID");
        }
    }

    function resetColors() {
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }

