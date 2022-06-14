<?php
    if (isset($_POST['submit']) && isset($error)) {
        echo '<div class="error-field">' . $error . '</div>';
    }
?>