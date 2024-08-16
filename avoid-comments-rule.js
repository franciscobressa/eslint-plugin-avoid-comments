module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Comments are not allowed in this project as they can cause unnecessary noise or leak into production code. Check configuration to see the exceptions from this rule.",
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    const isConsecutiveComment = (comment) => {
      const previousTokenOrComment = sourceCode.getTokenBefore(comment, {
        includeComments: true,
      });

      return (
        previousTokenOrComment &&
        ["Block", "Line"].includes(previousTokenOrComment.type)
      );
    };

    const isAllowedComment = (comment, allowedKeywords) => {
      const startsWithAllowedKeyword = allowedKeywords.some((keyword) =>
        comment.value.trim().startsWith(keyword)
      );
      return startsWithAllowedKeyword || isConsecutiveComment(comment);
    };

    const reportNonAllowedComment = (comment, allowedKeywords) => {
      if (!isAllowedComment(comment, allowedKeywords)) {
        context.report({
          loc: comment.loc,
          message: "Comments are not allowed",
        });
      }
    };

    return {
      Program() {
        const options = context.options[0] || {};
        const allowedKeywords = options.allow || [];

        const comments = sourceCode.getAllComments();
        comments.forEach((comment) =>
          reportNonAllowedComment(comment, allowedKeywords)
        );
      },
    };
  },
};
