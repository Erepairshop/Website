#!/bin/bash
# SSH File Transfer Helper Script
# Futtasd ezt a scriptet, és másold be a kapott parancsot a LOKÁLIS gépeden

# Változók
REMOTE_HOST="runsc"
REMOTE_USER="root"
REMOTE_PATH="/home/user/Website"
LOCAL_PATH="~/Downloads/Website"

echo "=============================================="
echo "  SSH Fájl Letöltési Parancsok"
echo "=============================================="
echo ""
echo "A teljes projekt letöltése:"
echo "-------------------------------------------"
echo "scp -r ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/* ${LOCAL_PATH}/"
echo ""
echo "Vagy rsync-kel (ajánlott nagyobb projektekhez):"
echo "-------------------------------------------"
echo "rsync -avz ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/ ${LOCAL_PATH}/"
echo ""
echo "=============================================="
echo "Egyedi fájl letöltése (cseréld ki a FAJLNEV-et):"
echo "-------------------------------------------"
echo "scp ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/FAJLNEV ${LOCAL_PATH}/"
echo ""
