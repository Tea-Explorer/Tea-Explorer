***Information from project guidelines in class repo***

### File Structure

Before you scaffold your files within your repo, determine how you will organize your project. Your files should be organized into folders in a meaningful manner. For example, all of your CSS files should be within a `css` folder.

Here is an example file structure:

```bash
.
├── about-us.html
├── index.html
├── quiz.html
├── css
|   ├── about-us.css
|   ├── home.css
|   └── quiz.css
└── js
    ├── home.js
    └── quiz.js
```

### Code Style

Follow the code style you have learned throughout this course. Ensure that the team is using meaningful and descriptive names for all files, variables, function names, etc. Follow best practices with casing, spacing, and indentation.

Your team should decide on standard naming conventions to use throughout the project and hold each other accountable to these standards. Do not use funny or offensive names. Write code that you will be proud to show a future employer.

The code base should also follow similar code organization from file to file. For example, all the files that affect application styling should follow similar patterns and syntax.

## Git

The entire team should follow the same process for synchronizing the code base on GitHub and on their local computers.

The main branch is the source of your deployment, which should only contain fully functional code. A development branch should be created as a main source for external branches to be merged into, and only the development branch should be merged into main.

All work should be on a feature branches with a meaningful name. Feature branches should be created off of the development branch. When the feature is completed, create a pull request from your feature branch to the development branch.

When you start a new feature and any time a pull request is merged into the development branch, make sure that your local development branch is up to date. Check out the development branch, then pull the development branch. Create your new branch off of the updated development branch.

Always make sure you are working off of the most up-to-date code base. This will prevent writing redundant code or overwriting code that you or another team member wrote.

If a pull request from a teammate has been merged and you working on a branch but are not ready to push your changes, you can still pull those changes while continuing to work on your feature branch. To do so, add and commit any changes on your local feature branch. Check out your main or development branch and pull the changes. Then, check out your feature branch and run the command `git merge main` if the main branch was pulled and `git merge development` if the development branch was pulled.

## Pull Requests

When your features are completed and tested on your local branch, you are ready to add, commit, and push those changes to GitHub. Then, create a pull request from your feature branch to the development branch. Do not merge your own pull request. Have one of your team members review and approve the request.

If the pull request is not ready to be merged, leave detailed comments and request changes from the creator of the pull request.

When the pull request is merged to development, every team member should check out their own local development branch and pull the changes. Then, test the code in the browser to ensure that the desired features have been implemented correctly.

Periodically, as determined by your team, make a pull request from the development branch to the main branch and follow the same process to test the changes to the main branch on everyone's local computers. Merging pull requests to the main branch should also update the deployed site, so confirm functionality there as well.

After a pull request is merged, leave the branch on GitHub even though GitHub says you can delete it. This helps with your overall record-keeping on the project.

***Information from project guidelines in class repo***

***Example developer style guides from previous labs***

Developer Style Guide
In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

For every lab within this project, you will be creating a new branch for every day. Create a new branch name that follows the following format class##-feature (example: class06-Objects).
Within your local version of your repo, add your .gitignore and .eslintrc.json.
While working within your non-main branch, conduct regular commits within git.
All properties/values and methods should be correctly constructed and given meaningful names.
Functions and methods should follow the single-responsibility principle.
Use template literals in your JS logic to render the stores as lists on the sales page.

***Example developer style guides from previous labs***
