<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects in CSCI-2170</title>
    <style>ul { font-size: 1.5rem; } h1 { font-size: 3rem }</style>
</head>

<body>
    <h1>CSCI-3172 Web-Centric Computing</h1>
    <h3>Projects completed for this course:</h3>
    <ul>
        <?php

        $directory = new RecursiveDirectoryIterator('.');
        $iterator = new RecursiveIteratorIterator($directory);

        foreach ($iterator as $info) {
            $filename = $info->getFilename();

            if (($filename === 'index.html' || $filename === 'index.php') && $info->getPathname() !== './index.php') {
                $content = mb_convert_case(
                    str_replace(
                        '/',
                        '-',
                        str_replace(
                            ['/index.html', '/index.php'],
                            ['', ''],
                            substr($info->getPathname(), 2)
                        )
                    ),
                    MB_CASE_TITLE,
                    'UTF-8'
                );
                $path = str_replace(['/index.html', '/index.php'], ['', ''], $info->getPathname());
                echo "<li><a href='$path'>$content</a></li>";
            }

        }

        ?>
    </ul>
</body>

</html>
