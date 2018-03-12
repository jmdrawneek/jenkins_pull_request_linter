// Check project for config file
// Get the lint rule sets.

// RUN: git diff --name-only --diff-filter=AM HEAD...${JENKING_BRANCH}
// Fetch the list of file names.
// Remove blacklist paths ie contrib/
// Put the files in groups depending on file types.
// Lint the files with the relevant lint profiles.
// Report on fails
