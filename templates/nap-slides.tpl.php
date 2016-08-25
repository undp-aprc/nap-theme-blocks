<?php foreach($nodes as $index=>$node): ?>
    <div class="slide">
        <?php print(render($node)); ?>
    </div>
<?php endforeach; ?>