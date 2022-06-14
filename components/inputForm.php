<form action="" method="post" class="input-fields">
    <?php require_once 'errorField.php' ?>
    <input
        type="text"
        name="todo-title"
        placeholder="What do you want to do today?"
        autofocus="true"
        autocomplete="off"
    />
    <input
        type="text"
        name="todo-body"
        placeholder="Description"
        autocomplete="off"
    />
    <input type="submit" name="submit" value="Create New Todo" />
</form>