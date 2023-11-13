# Developer Style Guide

## File Structure

Maintain an organized and semantically named file structure. CSS and JS files will be stored in their own directories. Images should be stored in a separate directory. Only place files in the top-level or root directory when there is a logical reason or requirement.

## Code Style

- **Semantic Naming:** Use meaningful and descriptive names for all files, variables, function names, etc. Follow best practices with casing, spacing, and indentation.
- **Single Responsibility Principle:** Functions and methods should only accomplish one task to improve reusability and readability of code.
- **Linter/Styler:** All code should follow the rules established in the linter file to reduce errors.
- **Comments:** Use comments liberally to provide additional context on the functionality of code. Commented out code should be removed before merging in the "main" branch.
- **Spacing:** Use spacing and indentations in code to create logical separation between different code blocks and provide a visual representation of nested code.

## Git Workflow

### Branches

The *main* branch is only for the final version of code to be deployed for the web application. The *development* branch will be the working branch on which to add features. Development of features should be done in *feature branches* created off the *development* branch. DO NOT delete any branches even after they are completely merged into another branch.

### Pull Requests

After completing work on a *feature branch*, create a pull request (PR) to merge the branch into *development*. PRs must be approved by a reviewer before they can be merged into *development*.

### Merges

*Feature branches* should be merged into the *development* branch upon completion of the feature. At the end of each day, after each all *feature branches* have been merged into *development* we will merge the *development* branch into *main* for deployment.
