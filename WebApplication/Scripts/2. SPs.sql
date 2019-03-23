-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE dbo.Ssp_Order_GetOrders
AS
BEGIN TRY
	SET NOCOUNT ON;

    SELECT 
		 ID
		,ORDER_DATE
		,ORDER_NUMBER
	FROM
		[dbo].[ORDER]
END TRY
BEGIN CATCH  
	THROW 
END CATCH
GO


-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
-- DROP PROCEDURE dbo.Ssp_Order_GetOrderByID
CREATE PROCEDURE dbo.Ssp_Order_GetOrderByID
	@iOrderId INT
AS
BEGIN TRY
	SET NOCOUNT ON;

    SELECT 
		 ID
		,ORDER_DATE
		,ORDER_NUMBER
	FROM
		[dbo].[ORDER]
	WHERE
		ID = @iOrderId

    SELECT 
		 [ID]
		,[ORDER_ID]
		,[PRODUCT_ID]
		,[QUANTITY]
		,[UNIT_PRICE]
	FROM
		[dbo].[ORDER_ITEM]
	WHERE
		ORDER_ID = @iOrderId
END TRY
BEGIN CATCH  
	THROW 
END CATCH

GO


-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE dbo.Ssp_Order_SaveOrder
	@vJson NVARCHAR(MAX)
AS
BEGIN TRY

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
END TRY
BEGIN CATCH
	THROW 
END CATCH
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================

CREATE PROCEDURE dbo.Ssp_Product_GetProducts
AS 
BEGIN TRY
	SET NOCOUNT ON;
	SELECT
		 [ID]
		,[NAME]
		,[CATEGORY]
		,[PRICE] 
		,[RATING]
	FROM 
		[dbo].[PRODUCT]

END TRY
BEGIN CATCH
	THROW
END CATCH
GO
