cat << 'EOF' > .husky/_/husky.sh
#!/usr/bin/env sh

# Husky v9 shim
if [ -z "$husky_skip_init" ]; then
  export husky_skip_init=1
  sh -e "$0" "$@" || exit 1
fi
EOF
