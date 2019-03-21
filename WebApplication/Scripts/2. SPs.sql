-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE dbo.Ssp_Order_GetOrderByID
	@iOrderId INT
AS
BEGIN
	SET NOCOUNT ON;

    SELECT 
		 ID
		,ORDER_DATE
		,ORDER_NUMBER
	FROM
		[dbo].[ORDER]
	WHERE
		ID = @iOrderId
END
GO


-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE dbo.Ssp_Order_SaveOrder
	@vJson NVARCHAR(MAX)
AS
BEGIN

	MERGE [dbo].[ORDER] AS TARGET
	USING(
		SELECT 
			 Id
			,OrderDate	
			,OrderNumber 
			,RecordStatus
		FROM OPENJSON ( @vJson )  
		WITH (  
			 Id				INT
			,OrderDate		DATETIME  
			,OrderNumber    VARCHAR(20)  
			,RecordStatus	INT   
		 )
	) AS SOURCE
	ON TARGET.ID = SOURCE.Id
	WHEN NOT MATCHED THEN
	INSERT
	(
		 ORDER_DATE
		,ORDER_NUMBER
	)
	VALUES
	(
		 SOURCE.OrderDate
		,SOURCE.OrderNumber
	)
	WHEN MATCHED AND SOURCE.RecordStatus = 2 THEN
	UPDATE SET
		 ORDER_DATE = SOURCE.OrderDate
		,ORDER_NUMBER = SOURCE.OrderNumber
	WHEN MATCHED AND SOURCE.RecordStatus = 3 THEN
		DELETE;
END
GO
