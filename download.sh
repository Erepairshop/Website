#!/bin/bash
# Git File Transfer Helper Script
# Futtasd ezt a scriptet, és másold be a kapott parancsot a LOKÁLIS gépeden

# Aktuális branch lekérése
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "claude/setup-ssh-file-transfer-Oi9Vt")

# Változott fájlok listázása (utolsó commitból)
FILES=$(git diff-tree --no-commit-id --name-only -r HEAD 2>/dev/null)

echo "=============================================="
echo "  Git Fájl Letöltési Parancsok"
echo "=============================================="
echo ""
echo "Branch: $BRANCH"
echo ""
echo "-------------------------------------------"
echo "TELJES BRANCH letöltése (checkout):"
echo "-------------------------------------------"
echo ""
echo "git fetch origin $BRANCH && git checkout FETCH_HEAD"
echo ""
echo "-------------------------------------------"
echo "ÖSSZES FÁJL letöltése a branch-ből:"
echo "-------------------------------------------"
echo ""
echo "git fetch origin $BRANCH && git checkout FETCH_HEAD -- ."
echo ""

if [ -n "$FILES" ]; then
    echo "-------------------------------------------"
    echo "EGYEDI FÁJLOK letöltése (utolsó commit):"
    echo "-------------------------------------------"
    echo ""
    for FILE in $FILES; do
        echo "git fetch origin $BRANCH && git checkout FETCH_HEAD -- $FILE"
    done
    echo ""
fi

echo "-------------------------------------------"
echo "EGYEDI FÁJL letöltése (cseréld ki a FAJLNEV-et):"
echo "-------------------------------------------"
echo ""
echo "git fetch origin $BRANCH && git checkout FETCH_HEAD -- FAJLNEV"
echo ""
