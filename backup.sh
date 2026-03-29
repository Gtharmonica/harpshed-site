#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# HarpShed Backup Script
# Run this from your Mac terminal to create a timestamped backup
# Usage: bash backup.sh
# ═══════════════════════════════════════════════════════════════

BACKUP_DIR="$HOME/Documents/HarpShed/backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H%M%S")
BACKUP_NAME="harpshed-backup-$TIMESTAMP"
SITE_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Creating backup of HarpShed site..."
echo "Source: $SITE_DIR"

# Create backups folder if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create compressed archive
cd "$SITE_DIR/.."
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" \
  --exclude='.git' \
  --exclude='node_modules' \
  "$(basename "$SITE_DIR")"

echo "Backup saved: $BACKUP_DIR/$BACKUP_NAME.tar.gz"

# Keep only last 10 backups
cd "$BACKUP_DIR"
ls -t harpshed-backup-*.tar.gz 2>/dev/null | tail -n +11 | xargs rm -f 2>/dev/null

BACKUP_COUNT=$(ls harpshed-backup-*.tar.gz 2>/dev/null | wc -l)
echo "Total backups: $BACKUP_COUNT (keeping last 10)"
echo "Done."
