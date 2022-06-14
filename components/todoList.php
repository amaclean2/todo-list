<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $query = $db->query("SELECT * FROM todos ORDER BY id ASC");
        $count = 1;
        while ($fetch = $query->fetch_array()) {
        ?>
            <tr>
                <td><?php echo $fetch['todo_title']; ?></td>
                <td><?php echo $fetch['todo_body']; ?></td>
            </tr>
        <?php
            $count++;
        }
        ?>
    </tbody>
</table>