# Git Parancsok - Hasznos Minták

## Fájlok lekérése másik branch-ről

Ha módosított fájlokat szeretnél lekérni egy másik branch-ről:

```bash
git fetch origin <branch-name> && git checkout FETCH_HEAD -- <file-path>
```

### Példa:
```bash
git fetch origin claude/review-branch-differences-Mi6M6 && git checkout FETCH_HEAD -- erepairshop/index.php
```

### Több fájl lekérése:
```bash
git fetch origin <branch-name> && git checkout FETCH_HEAD -- file1.php file2.tsx file3.css
```

## Egyéb hasznos parancsok

### Branch létrehozása és váltás:
```bash
git checkout -b <new-branch-name>
```

### Távoli branch követése:
```bash
git push -u origin <branch-name>
```

### Változások megtekintése:
```bash
git diff HEAD
git status
```
